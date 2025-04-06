/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

export async function Awaiter(time :number = 1000) :Promise<void> {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, time);
    })
}

export default Awaiter;