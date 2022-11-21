import pandas as pd
import numpy as np
import json


df =  pd.read_csv("final_project/chicago_crime.csv")



grouped = df.groupby("Year")

grouped = df.groupby("Community Area", axis="columns")

grouped = df.groupby(["Year", "Community Area"])


counts = grouped.size()


out = grouped.size().to_dict()
print(out)




grouped2 = df.groupby('Year')[['Community Area','']].apply(lambda x: x.set_index('Chain').to_dict(orient='index')).to_dict()

## with open("final_project/chicago_crime.json", "w") as outfile:
    ## json.dump(out, outfile)
counts.to_json(r"final_project/chicago_crime.json", orient = 'index')

