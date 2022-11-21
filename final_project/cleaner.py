import pandas as pd
import numpy as np
import json


df =  pd.read_csv("chicago_crime.csv")

<<<<<<< HEAD


to_drop = ['Case Number','Wards', 'Police Beats','ID','FBI Code', 'X Coordinate', 'Y Coordinate', 'Beat','District', 'IUCR', "Police Districts", "Boundaries - ZIP Codes" ]
df.drop(to_drop, inplace=True, axis=1)
grouped = df.groupby("Year")

grouped = df.groupby("Community Area", axis="columns")

grouped = df.groupby(["Year", "Community Area"])


counts = grouped.size()


out = {'Community': grouped.size().to_dict()}
print(out)


df.to_csv(r'final_project/chicago_crime.csv')

with open("final_project/chicago_crime.json", "w") as outfile:
    json.dump(out, outfile)
## out.to_json(r"final_project/chicago_crime.json")

=======
print(df.head())
>>>>>>> parent of af22140... removed large file
