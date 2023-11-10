const backendData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = Array(1000).fill(1);
            resolve(data)
        },100)

    })
}

const handleFetchData = async (numTry)=>{
    try {
        const response = await backendData();
        if(response.length){
            let total = response.length;
            let page = 0;
            let limit = 100;
            let totalPage = Math.ceil(total/limit)
            const render = (page)=>{
                if(page>totalPage) return;
                let arr =[];
                for (let i=page*limit;i<page*limit+100;i++){
                    arr.push(response[i]);
                }
                console.log(arr);
                render(page+1);
            }
            render(page);
        }

    } catch (error) {
        if(numTry===1) return 'data is not valid';
        handleFetchData(numTry-1);
    }

}

handleFetchData(3);