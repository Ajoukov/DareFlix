import json
import sys
sys.stdout = open("info.txt","w")
words = {}
curr = json.load(open("subtitle.json"))
for i in curr["captions"]:
    content = i["content"]
    
    startTime = i["startTime"]
    startTime = startTime.split(":")
    time = int(startTime[0])*3600+int(startTime[1])*60+int(float(startTime[2]))

    for j in content.split():
        j = "".join(x for x in j if x.isalpha() or x =="'")
        if j not in words:
            words[j]=[]
        words[j].append(time)

recommended = [i for i in words if 5<=len(words[i])<=10]
for i in recommended:
    print(i,len(words[i]),words[i])
