export function Sum({ nums = [1,2,3] }){
    return (
        <h1>{nums.reduce((a, b) => a + b)}</h1>
    )
}