import os
import json
import urllib.request
import urllib.parse
import concurrent.futures

os.makedirs('public/assets/materials/specialties', exist_ok=True)
os.makedirs('public/assets/materials/mobs', exist_ok=True)
os.makedirs('public/assets/materials/talents', exist_ok=True)

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

SPECIALTIES = {
    # Mondstadt
    'cecilia': 'Item_Cecilia.png',
    'philanemo-mushroom': 'Item_Philanemo_Mushroom.png',
    'valberry': 'Item_Valberry.png',
    'small-lamp-grass': 'Item_Small_Lamp_Grass.png',
    'wolfhook': 'Item_Wolfhook.png',
    'dandelion-seed': 'Item_Dandelion_Seed.png',
    'calla-lily': 'Item_Calla_Lily.png',
    'windwheel-aster': 'Item_Windwheel_Aster.png',
    # Liyue
    'cor-lapis': 'Item_Cor_Lapis.png',
    'silk-flower': 'Item_Silk_Flower.png',
    'jueyun-chili': 'Item_Jueyun_Chili.png',
    'qingxin': 'Item_Qingxin.png',
    'glaze-lily': 'Item_Glaze_Lily.png',
    'noctilucous-jade': 'Item_Noctilucous_Jade.png',
    'starconch': 'Item_Starconch.png',
    'violetgrass': 'Item_Violetgrass.png',
    'clearwater-jade': 'Item_Clearwater_Jade.png',
    # Inazuma
    'naku-weed': 'Item_Naku_Weed.png',
    'amakumo-fruit': 'Item_Amakumo_Fruit.png',
    'sea-ganoderma': 'Item_Sea_Ganoderma.png',
    'sango-pearl': 'Item_Sango_Pearl.png',
    'onikabuto': 'Item_Onikabuto.png',
    'dendrobium': 'Item_Dendrobium.png',
    'fluorescent-fungus': 'Item_Fluorescent_Fungus.png',
    # Sumeru
    'kalpalata-lotus': 'Item_Kalpalata_Lotus.png',
    'rukkhashava-mushrooms': 'Item_Rukkhashava_Mushrooms.png',
    'padisarah': 'Item_Padisarah.png',
    'scarab': 'Item_Scarab.png',
    'henna-berry': 'Item_Henna_Berry.png',
    'mourning-flower': 'Item_Mourning_Flower.png',
    # Fontaine
    'lakelight-lily': 'Item_Lakelight_Lily.png',
    'lumitoile': 'Item_Lumitoile.png',
    'rainbow-rose': 'Item_Rainbow_Rose.png',
    'beryl-conch': 'Item_Beryl_Conch.png',
    'romaritime-flower': 'Item_Romaritime_Flower.png',
    'subdetection-unit': 'Item_Subdetection_Unit.png',
    'spring-of-the-first-dewdrop': 'Item_Spring_of_the_First_Dewdrop.png',
    # Natlan
    'saurian-claw-succulent': 'Item_Saurian_Claw_Succulent.png',
    'quenepa-berry': 'Item_Quenepa_Berry.png',
    'sprayfeather-gill': 'Item_Sprayfeather_Gill.png',
    'withering-purpurbloom': 'Item_Withering_Purpurbloom.png',
}

MOBS = {
    'spectral-nucleus': 'Item_Spectral_Nucleus.png',
    'famed-handguard': 'Item_Famed_Handguard.png',
    'lieutenants-insignia': "Item_Lieutenant's_Insignia.png",
    'transoceanic-chunk': 'Item_Transoceanic_Chunk.png',
    'energy-nectar': 'Item_Energy_Nectar.png',
    'chaos-core': 'Item_Chaos_Core.png',
    'slime-concentrate': 'Item_Slime_Concentrate.png',
}

TALENTS = {
    'freedom': 'Item_Philosophies_of_Freedom.png',
    'resistance': 'Item_Philosophies_of_Resistance.png',
    'ballad': 'Item_Philosophies_of_Ballad.png',
    'prosperity': 'Item_Philosophies_of_Prosperity.png',
    'diligence': 'Item_Philosophies_of_Diligence.png',
    'gold': 'Item_Philosophies_of_Gold.png',
    'transience': 'Item_Philosophies_of_Transience.png',
    'elegance': 'Item_Philosophies_of_Elegance.png',
    'light': 'Item_Philosophies_of_Light.png',
    'admonition': 'Item_Philosophies_of_Admonition.png',
    'ingenuity': 'Item_Philosophies_of_Ingenuity.png',
    'praxis': 'Item_Philosophies_of_Praxis.png',
    'equity': 'Item_Philosophies_of_Equity.png',
    'justice': 'Item_Philosophies_of_Justice.png',
    'order': 'Item_Philosophies_of_Order.png',
    'contention': 'Item_Philosophies_of_Contention.png',
    'kindling': 'Item_Philosophies_of_Kindling.png',
    'conflict': 'Item_Philosophies_of_Conflict.png',
}

def normalize_title(t):
    return urllib.parse.unquote(t).replace('_', ' ')

def fetch_fandom_urls(wiki_files):
    # Fandom API handles up to 50 titles per request
    titles = [f"File:{f}" for f in wiki_files]
    result = {}
    
    for i in range(0, len(titles), 40):
        batch = titles[i:i+40]
        base_url = 'https://genshin-impact.fandom.com/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=' + '|'.join([urllib.parse.quote(t) for t in batch])
        req = urllib.request.Request(base_url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                for _, pdata in data.get('query', {}).get('pages', {}).items():
                    title = pdata.get('title')
                    imginfo = pdata.get('imageinfo', [{}])[0]
                    url = imginfo.get('url')
                    if url and title:
                        result[normalize_title(title)] = url
        except Exception as e:
            print(f"Error querying batch: {e}")
    return result

def download_file(target_path, url):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 500:
        return f'Skipped (exists): {target_path}'
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20) as resp, open(target_path, 'wb') as f:
            f.write(resp.read())
        return f'✓ Downloaded: {target_path} ({os.path.getsize(target_path)} bytes)'
    except Exception as e:
        return f'✗ Failed {target_path} from {url}: {e}'

def main():
    all_files = list(SPECIALTIES.values()) + list(MOBS.values()) + list(TALENTS.values())
    print(f"Fetching URLs for {len(all_files)} items...")
    url_map = fetch_fandom_urls(all_files)
    print(f"Retrieved {len(url_map)} image URLs.")

    tasks = []
    # Specialties
    for key, wiki_file in SPECIALTIES.items():
        title_key = normalize_title(f"File:{wiki_file}")
        url = url_map.get(title_key)
        if url:
            target = f"public/assets/materials/specialties/{key}.png"
            tasks.append((target, url))
        else:
            print(f"⚠️ Missing URL for specialty: {key} ({title_key})")

    # Mobs
    for key, wiki_file in MOBS.items():
        title_key = normalize_title(f"File:{wiki_file}")
        url = url_map.get(title_key)
        if url:
            target = f"public/assets/materials/mobs/{key}.png"
            tasks.append((target, url))
        else:
            print(f"⚠️ Missing URL for mob: {key} ({title_key})")

    # Talents
    for key, wiki_file in TALENTS.items():
        title_key = normalize_title(f"File:{wiki_file}")
        url = url_map.get(title_key)
        if url:
            target = f"public/assets/materials/talents/{key}.png"
            tasks.append((target, url))
        else:
            print(f"⚠️ Missing URL for talent: {key} ({title_key})")

    print(f"Starting download of {len(tasks)} files...")
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(download_file, target, url) for target, url in tasks]
        for f in concurrent.futures.as_completed(futures):
            res = f.result()
            if '✓' in res or '✗' in res:
                print(res)

    print("Finished downloading all material assets!")

if __name__ == '__main__':
    main()
