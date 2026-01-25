class AlgoService {
    constructor() {}

    selectionSort(arr) {
        console.log(arr);
        let arr2 = Array.from(arr);

        let it1 = 0;
        let it2 = 0;
        for(let i = 0; i < arr.length; i++){
            let minIndex = i;
            for(let j = i; j < arr.length; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
                it1++;
            }

            if(minIndex !== i){
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                console.log(arr);
            }
        }

        for(let i = 0; i < arr2.length ; i++){
            let maxIndex = i;
            for(let j= i; j < arr2.length; j++){
                if(arr2[j] > arr2[maxIndex]){
                    maxIndex = j;
                }
            }

            if(maxIndex !== i){
                let temp = arr2[i];
                arr2[i] = arr2[maxIndex];
                arr2[maxIndex] = temp;
            }
        }

        const result = {"asc": arr, "desc": arr2}

        console.log(result);

    }

    bubbleSort(arr){
        console.log(arr);
        let arr2 = [...arr];
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length -i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    console.log(arr, i, j);
                }
            }
        }

        for(let i = 0; i < arr2.length; i++){
            for(let j = 0; j < arr2.length -1; j++){
                if(arr2[j] < arr2[j + 1]){
                    [arr2[j], arr2[j +1]] = [arr2[j +1], arr2[j]];
                    console.log(arr2, i, j);
                }
            }
        } 

        const result = {"asc": arr, "desc": arr2}

        console.log(result);
    }
}

export default new AlgoService();