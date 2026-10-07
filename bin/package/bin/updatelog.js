#!/usr/bin/env node
const args = process.argv.slice(2)
const value = args[0]
const version_log = 
`1.0.0: Created the addon. Was trying to fix the README.md file.
1.0.1: Nothing special.
1.0.2: Nothing special.
1.0.3: Didn't mean to delete it.
1.0.4: Made the README satisfactory enough for me.
1.0.5: Added Vite instructions to the README.
1.0.6: Finally read a tutorial on .md files and added the "version-log", "preview <function>" and "credits" commands. They didn't work then.
1.0.7: Made the commands in 1.0.6 work.
1.0.8: Updated the commands and the README so that these commands work with npx.
1.0.9: Added a new function called rand_boolean(), choice in preview mode now uses user input, revamped the README.
1.1.0: Added a new function called randfloat(), changed the version-log command to: npx update-log. Also changed the README a bit.`
const list = version_log.split("\n")
if (value == "1.0.0"){
  console.log(list[0])
}
else if (value == "1.0.1"){
  console.log(list[1])
}
else if (value == "1.0.2"){
  console.log(list[2])
}
else if (value == "1.0.3"){
  console.log(list[3])
}
else if (value == "1.0.4"){
  console.log(list[4])
}
else if (value == "1.0.5"){
  console.log(list[5])
}
else if (value == "1.0.6"){
  console.log(list[6])
}
else if (value == "1.0.7"){
  console.log(list[7])
}
else if (value == "1.0.8"){
  console.log(list[8])
}
else if (value == "1.0.9"){
  console.log(list[9])
}
else if (value == "1.1.0"){
  console.log(list[10])
}
else if (value == "help"){
  console.log("'npm run version-log <version-number>' for specified versions or 'npm run version-log' for the entire thing.")
}
else{
  console.log(version_log)
}