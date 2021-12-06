const getObjectProperty = (obj, path, defaultValue) => {

    const arrObj = path.split('.');
    result = obj;
    for (let i = 0; i < arrObj.length; i++) {
        if (arrObj[i] in result) {
            result = result[arrObj[i]];
        } else {
            result = defaultValue;
            break;
        }
    };
    alert(result);
};

const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
};

getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'