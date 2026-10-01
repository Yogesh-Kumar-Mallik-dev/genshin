import os
import json
import urllib.request
import urllib.parse
import concurrent.futures

os.makedirs('public/assets/elements', exist_ok=True)
os.makedirs('public/assets/characters', exist_ok=True)
os.makedirs('public/assets/weapons', exist_ok=True)
os.makedirs('public/assets/artifacts', exist_ok=True)

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def normalize_title(t):
    return urllib.parse.unquote(t).replace('_', ' ')

def fetch_fandom_urls(titles):
    base_url = 'https://genshin-impact.fandom.com/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=' + '|'.join([urllib.parse.quote(t) for t in titles])
    req = urllib.request.Request(base_url, headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        result = {}
        for _, pdata in data.get('query', {}).get('pages', {}).items():
            title = pdata.get('title')
            imginfo = pdata.get('imageinfo', [{}])[0]
            url = imginfo.get('url')
            if url and title:
                result[normalize_title(title)] = url
        return result

def download_file(target_path, url):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        return f'Skipped (exists): {target_path}'
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp, open(target_path, 'wb') as f:
            f.write(resp.read())
        return f'✓ Downloaded: {target_path} ({os.path.getsize(target_path)} bytes)'
    except Exception as e:
        return f'✗ Failed {target_path} from {url}: {e}'

# 1. Elements mapping
ELEMENTS = {
    'pyro': 'File:Element_Pyro.png',
    'hydro': 'File:Element_Hydro.png',
    'dendro': 'File:Element_Dendro.png',
    'electro': 'File:Element_Electro.png',
    'anemo': 'File:Element_Anemo.png',
    'cryo': 'File:Element_Cryo.png',
    'geo': 'File:Element_Geo.png',
}

# 2. Characters mapping
CHARACTERS = {
    'furina': ('Furina_Icon.png', 'Furina_Card.png', 'Furina_Wish.png'),
    'neuvillette': ('Neuvillette_Icon.png', 'Neuvillette_Card.png', 'Neuvillette_Wish.png'),
    'arlecchino': ('Arlecchino_Icon.png', 'Arlecchino_Card.png', 'Arlecchino_Wish.png'),
    'kazuha': ('Kaedehara_Kazuha_Icon.png', 'Kaedehara_Kazuha_Card.png', 'Kaedehara_Kazuha_Wish.png'),
    'nahida': ('Nahida_Icon.png', 'Nahida_Card.png', 'Nahida_Wish.png'),
    'raiden': ('Raiden_Shogun_Icon.png', 'Raiden_Shogun_Card.png', 'Raiden_Shogun_Wish.png'),
    'zhongli': ('Zhongli_Icon.png', 'Zhongli_Card.png', 'Zhongli_Wish.png'),
    'navia': ('Navia_Icon.png', 'Navia_Card.png', 'Navia_Wish.png'),
    'bennett': ('Bennett_Icon.png', 'Bennett_Card.png', 'Bennett_Wish.png'),
    'xiangling': ('Xiangling_Icon.png', 'Xiangling_Card.png', 'Xiangling_Wish.png'),
    'xingqiu': ('Xingqiu_Icon.png', 'Xingqiu_Card.png', 'Xingqiu_Wish.png'),
}

# 3. Weapons mapping
WEAPONS = {
    'splendor-of-tranquil-waters': 'Weapon_Splendor_of_Tranquil_Waters.png',
    'tome-of-the-eternal-flow': 'Weapon_Tome_of_the_Eternal_Flow.png',
    'crimson-moons-semblance': 'Weapon_Crimson_Moon%27s_Semblance.png',
    'freedom-sworn': 'Weapon_Freedom-Sworn.png',
    'a-thousand-floating-dreams': 'Weapon_A_Thousand_Floating_Dreams.png',
    'engulfing-lightning': 'Weapon_Engulfing_Lightning.png',
    'the-catch': 'Weapon_The_Catch.png',
    'black-tassel': 'Weapon_Black_Tassel.png',
    'white-tassel': 'Weapon_White_Tassel.png',
    'sacrificial-sword': 'Weapon_Sacrificial_Sword.png',
    'sapwood-blade': 'Weapon_Sapwood_Blade.png',
    'favonius-sword': 'Weapon_Favonius_Sword.png',
    'favonius-lance': 'Weapon_Favonius_Lance.png',
    'prototype-amber': 'Weapon_Prototype_Amber.png',
    'sacrificial-fragments': 'Weapon_Sacrificial_Fragments.png',
    'sacrificial-jade': 'Weapon_Sacrificial_Jade.png',
    'fleuve-cendre-ferryman': 'Weapon_Fleuve_Cendre_Ferryman.png',
    'xiphos-moonlight': 'Weapon_Xiphos%27_Moonlight.png',
    'verdict': 'Weapon_Verdict.png',
}

# 4. Artifacts mapping (Flower of Life pieces)
ARTIFACTS = {
    'golden-troupe': 'Item_Golden_Bird%27s_Shedding.png',
    'marechaussee-hunter': 'Item_Hunter%27s_Brooch.png',
    'emblem-of-severed-fate': 'Item_Magnificent_Tsuba.png',
    'deepwood-memories': 'Item_Labyrinth_Wayfarer.png',
    'viridescent-venerer': 'Item_Flower_of_Accolades.png',
    'noblesse-oblige': 'Item_Royal_Flora.png',
    'tenacity-of-the-millelith': 'Item_Flower_of_Accolades.png',
    'fragment-of-harmonic-whimsy': 'Item_Golden_Bird%27s_Shedding.png',
    'gladiators-finale': 'Item_Royal_Flora.png',
    'nighttime-whispers': 'Item_Golden_Bird%27s_Shedding.png'
}

def main():
    titles_to_query = []
    # Elements
    for _, title in ELEMENTS.items():
        titles_to_query.append(title)
    # Characters
    for cid, (icon, card, wish) in CHARACTERS.items():
        titles_to_query.append(f'File:{icon}')
        titles_to_query.append(f'File:{card}')
        titles_to_query.append(f'File:{wish}')
    # Weapons
    for wid, wfile in WEAPONS.items():
        titles_to_query.append(f'File:{wfile}')
    # Artifacts
    for aid, afile in ARTIFACTS.items():
        titles_to_query.append(f'File:{afile}')

    url_map = {}
    chunk_size = 40
    print(f'Querying URLs for {len(titles_to_query)} assets...')
    for i in range(0, len(titles_to_query), chunk_size):
        chunk = titles_to_query[i:i+chunk_size]
        res = fetch_fandom_urls(chunk)
        url_map.update(res)

    print(f'Resolved {len(url_map)} asset URLs.')

    download_tasks = []

    # Elements
    for el, title in ELEMENTS.items():
        key = normalize_title(title)
        url = url_map.get(key)
        if url:
            download_tasks.append((f'public/assets/elements/{el}.png', url))

    # Characters
    for cid, (icon, card, wish) in CHARACTERS.items():
        cdir = f'public/assets/characters/{cid}'
        os.makedirs(cdir, exist_ok=True)
        key_icon = normalize_title(f'File:{icon}')
        key_card = normalize_title(f'File:{card}')
        key_wish = normalize_title(f'File:{wish}')

        if key_icon in url_map:
            download_tasks.append((f'{cdir}/icon.png', url_map[key_icon]))
        if key_card in url_map:
            download_tasks.append((f'{cdir}/card.png', url_map[key_card]))
        if key_wish in url_map:
            download_tasks.append((f'{cdir}/splash.png', url_map[key_wish]))

    # Weapons
    for wid, wfile in WEAPONS.items():
        key = normalize_title(f'File:{wfile}')
        url = url_map.get(key)
        if url:
            download_tasks.append((f'public/assets/weapons/{wid}.png', url))

    # Artifacts
    for aid, afile in ARTIFACTS.items():
        key = normalize_title(f'File:{afile}')
        url = url_map.get(key)
        if url:
            download_tasks.append((f'public/assets/artifacts/{aid}.png', url))

    print(f'Starting concurrent download of {len(download_tasks)} assets...')
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(download_file, target, url) for target, url in download_tasks]
        for f in concurrent.futures.as_completed(futures):
            print(f.result())

    print('✓ All assets downloaded and cached locally in public/assets/!')

if __name__ == '__main__':
    main()
