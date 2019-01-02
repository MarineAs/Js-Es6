var arr = [];


    for (var i=0;i<10;i++){
        arr[i]=[];

        for (var j=0; j<10;j++){
            if ((arr[-i]==j)||(i==j)){
                arr[i][j]='x';
            }
            else arr[i][j]='0';

        }

    }
console.log(arr)



