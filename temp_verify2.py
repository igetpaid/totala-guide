import json, re

with open("js/data.js", "r", encoding="utf-8") as f:
    js = f.read()

with open("game_data/arm_stats.json", "r", encoding="utf-8") as f:
    arm_stats = json.load(f)

# Find all units and check for same stats
units = []
for m in re.finditer(r'id: "(arm_\w+)"', js):
    uid = m.group(1)
    chunk = js[m.start():m.start()+500]
    
    metal = re.search(r"metal:\s*(\d+)", chunk)
    energy = re.search(r"energy:\s*(\d+)", chunk)
    bt = re.search(r"buildTime:\s*(\d+)", chunk)
    hp = re.search(r"hp:\s*(\d+)", chunk)
    
    if metal and energy and bt and hp:
        units.append({
            "id": uid,
            "metal": int(metal.group(1)),
            "energy": int(energy.group(1)),
            "bt": int(bt.group(1)),
            "hp": int(hp.group(1)),
        })

# Group by fingerprint
from collections import defaultdict
groups = defaultdict(list)
for u in units:
    key = (u["metal"], u["energy"], u["bt"], u["hp"])
    groups[key].append(u["id"])

print("=== Duplicate stat groups ===")
for key, ids in sorted(groups.items(), key=lambda x: -len(x[1])):
    if len(ids) > 1:
        print("M=" + str(key[0]) + " E=" + str(key[1]) + " BT=" + str(key[2]) + " HP=" + str(key[3]))
        for uid in ids:
            name_match = re.search(r'id: "' + uid + r'".*?name:\s*"([^"]+)"', js, re.DOTALL)
            name = name_match.group(1) if name_match else "?"
            print("  " + uid + " (" + name + ")")
        print()

total_dupes = sum(len(g) for g in groups.values() if len(g) > 1)
print("Units with duplicate stats: " + str(total_dupes))
