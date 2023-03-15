export function Sum({ nums }){
    return (
        <h1>{nums.reduce((a, b) => a + b)}</h1>
    )
}