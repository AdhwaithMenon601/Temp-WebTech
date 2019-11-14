import pandas as pd

df = pd.read_csv("items-Processors-Desktops.csv")

df.columns = ["junk_00", "data", "junk_01", "junk_02", "junk_03", "junk_04", "junk_05"]

del df["junk_00"]
del df["junk_01"]
del df["junk_02"]
del df["junk_03"]
del df["junk_04"]
del df["junk_05"]

df = df[~df.data.str.contains("Refurbished:")]

df.to_csv('../data/processor.csv', index = False)

intel = df[df.data.str.contains("Intel")]
amd = df[df.data.str.contains("AMD")]

#intel = intel.row.str.extract('')
print(intel)

intel_test = intel.data.str.extract('(?P<socket>((LGA(-| )\d+)|(\d+W)))(?P<frequency>((\d.\d+ GHz)|(\d.\d+GHz)))')
print(intel_test)

intel.to_csv('../data/processor_intel.csv', index = False)
intel_test.to_csv('../data/processor_intel_test.csv', index = False)
amd.to_csv('../data/processor_amd.csv', index = False)
