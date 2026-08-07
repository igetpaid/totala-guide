import os, re, json

fbi_dir = r"D:\OpenCode Projects\Totala_guide\game_data\extracted\TAESC\unitsE"

# Load all FBI names
fbi_names = {}
for fn in os.listdir(fbi_dir):
    if fn.upper().endswith(".FBI"):
        with open(os.path.join(fbi_dir, fn), "r", encoding="latin-1") as f:
            content = f.read()
        nm = re.search(r"Name=([^;]+);", content)
        desc = re.search(r"Description=([^;]+);", content)
        name = nm.group(1).strip() if nm else ""
        d = desc.group(1).strip() if desc else ""
        fbi_names[fn.upper().replace(".FBI", "")] = {"name": name, "desc": d}

# Questionable pairs - are they same or different?
pairs = [
    ("ARMSIEGE", "arm_nova", "arm_demolisher"),
    ("ARMSTUN", "arm_whiplash", "arm_warden"),
    ("ARMMCV", "arm_expedition", "arm_empyrean"),
    ("ARMOMNI", "arm_max_intel", "arm_tantalus"),
    ("ARMSCRAM", "arm_fibber", "arm_fibber3"),
    ("ARMMART", "arm_tosser", "arm_luger"),
    ("ARMAACRUS", "arm_lancer", "arm_torrent"),
    ("ARMSFIDO", "arm_centaur", "arm_avalon"),
    ("ARMSHGEN_UPG", "arm_aegis", "arm_whiplash"),
    ("ARMWALK", "arm_gargant", "arm_raptor"),
    ("ARMECV", "arm_ucv", "arm_custodian"),
]

for fbi, uid1, uid2 in pairs:
    d = fbi_names.get(fbi, {})
    print(fbi + ": " + d.get("name", "?") + " (" + d.get("desc", "?") + ")")
    print("  " + uid1 + " vs " + uid2)
    print()

# What does the game wiki say Nova actually is?
# Search ALL FBI for "LRPC" or "Long Range" in Description
print("=== ALL units with 'LRPC' or 'Long Range' in FBI ===")
for fn in os.listdir(fbi_dir):
    if fn.upper().startswith("ARM") and fn.upper().endswith(".FBI"):
        with open(os.path.join(fbi_dir, fn), "r", encoding="latin-1") as f:
            content = f.read()
        desc_m = re.search(r"Description=([^;]+);", content)
        if desc_m:
            desc = desc_m.group(1)
            if any(k in desc.upper() for k in ["LRPC", "LONG RANGE", "MOBILE LRPC", "SIEGE"]):
                print("  " + fn.replace(".fbi", "") + ": " + desc)
