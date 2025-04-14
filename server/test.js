/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


async function main() {
    let startTime = Date.now();
    for (let i = 0; i <= 2000; i++) {
        fetch("http://localhost:4000/api/products/data/attributes/brands?product_type_id=1")
        .catch(error => console.error("ERROR"));
    }
    let endTime = Date.now();
    let executionTime = endTime - startTime;

    console.log(`1000 Request Completed in ${executionTime / 1000}s`);
    
}

main()