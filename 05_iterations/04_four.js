const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swify by apple'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']
for(const key in programming) {
    console.log(key)
}

//maps are not iterable by for loop