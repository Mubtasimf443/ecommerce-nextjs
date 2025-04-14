/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

export default async function Awaiter(time : number = 1000) {
    await new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(true)
        }, time);
    });
    return;
}