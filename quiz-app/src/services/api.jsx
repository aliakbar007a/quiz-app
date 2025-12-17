export async function fetchQuestions(params) {
    try{
        const res = await fetch("http://localhost:3000/questions");
        const data = await res.json();
        return data;
    } catch {
        throw new Error ("filed to fetch data")
    }
}
    