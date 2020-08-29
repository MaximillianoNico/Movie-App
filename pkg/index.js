function match(items = []) {
    let group = []
    for (var i = 0; i < items.length; i++){
        const set = items[i].res;
        const groupKey = set;
        for (var j = 1; j < items.length+1; j++){
            if (items[j]){
                if (set == items[j].res) {
                    let d = []
                    if (i == 0) {
                        d.push(items[i].key)
                    }
                    console.log('set data : ', items[j])
                    const newData = {
                        groupKey: items[j].res,
                        data: [...d, items[j].key]
                    };
                    group.push(newData);
                }
            }
        }
    }
    return group;
}

const sortBy = (item = []) => {
    function mainSort (item) {
        if (item.length === 1) {
          // return once we hit an array with a single item
          return item
        }
      
        const mid = Math.floor(item.length / 2)
        const left = item.slice(0, mid) // get item list from left side
        const right = item.slice(mid) // get item list from right side
        console.log('[debug]: left: ', left);
        console.log('[debug]: right: ', right);
      
        return merge(
          mainSort(left),
          mainSort(right)
        )
      }

      // compare the arrays item by item and return the concatenated result
        function merge (left = [], right = []) {
            let result = [];
            let indexLeft = 0
            let indexRight = 0
        
            while (indexLeft < left.length && indexRight < right.length) {
                if (left[indexLeft] < right[indexRight]) { // k < t
                    result.push(left[indexLeft])
                    indexLeft++
                } else {
                    result.push(right[indexRight])
                    indexRight++
                }
            }
            const resLeft = left.slice(indexLeft);
            const resRight = right.slice(indexRight);
        
            return result
                .concat(resLeft)
                .concat(resRight)
        }
    return mainSort(item);
}

const Anagram = (list = []) => {
    let newData = []
    let groupData = [];
    for (let i = 0; i < list.length; i++) {
        const hasEndItem = list[i+1]; 
        const hasStartItem = list[i];

        const startItem = hasStartItem.split('');
        const endItem = hasEndItem && hasEndItem.split('') || [''];
        
        const sort1 = sortBy(startItem);
        const sort2 = sortBy(endItem);

        newData.push({ key: hasStartItem, res: sort1.join('')})


    }

    groupData = match(newData);
    console.log('final: newData: ', newData);
    console.log('final: groupData: ', groupData);
}

Anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'])