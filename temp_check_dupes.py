import json, re, os
from collections import defaultdict

with open(os.path.join('js', 'data.js'), 'r', encoding='utf-8') as f:
    js = f.read()

# Load arm_stats and cor_stats
with open(os.path.join('game_data', 'arm_stats.json'), 'r', encoding='utf-8') as f:
    arm_stats = json.load(f)
with open(os.path.join('game_data', 'cor_stats.json'), 'r', encoding='utf-8') as f:
    cor_stats = json.load(f)

all_stats = {}
all_stats.update(arm_stats)
all_stats.update(cor_stats)

# Group by fingerprint
groups = defaultdict(list)
for uid, data in all_stats.items():
    key = (data.get('metal',0), data.get('energy',0), data.get('buildTime',0), data.get('hp',0))
    groups[key].append(uid)

print('=== Units with IDENTICAL stats ===')
dupes = 0
for key, ids in sorted(groups.items(), key=lambda x: -len(x[1])):
    if len(ids) > 1:
        dupes += 1
        print('M=' + str(key[0]) + ' E=' + str(key[1]) + ' BT=' + str(key[2]) + ' HP=' + str(key[3]))
        for uid in ids:
            name = all_stats[uid].get('name', '?')
            print('  ' + uid + ' (' + name + ')')
        print()

print('Total groups: ' + str(dupes))
total = sum(len(g) for g in groups.values() if len(g) > 1)
print('Units affected: ' + str(total))
