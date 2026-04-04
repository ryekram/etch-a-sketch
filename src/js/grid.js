export function gridInit(container) {
    for (let index = 0; index < 256; index++) {
        const cell = document.createElement("div")
        cell.classList.add("grid__cell")
        container.append(cell)
    }
}
