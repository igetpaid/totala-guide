import re, json

with open("js/data.js", "r", encoding="utf-8") as f:
    js = f.read()

# Check deleted
for d in ["arm_commander2", "arm_illusion", "arm_custodian"]:
    if d in js:
        print("STILL EXISTS: " + d)
    else:
        print("DELETED: " + d)

# Check approximate
print()
count = 0
for m in re.finditer(r'id: "(arm_\w+)"', js):
    uid = m.group(1)
    chunk = js[m.start():m.start()+300]
    if "approximate: true" in chunk:
        count += 1
        print("approximate=true: " + uid)

print("\nTotal approximate: " + str(count))
