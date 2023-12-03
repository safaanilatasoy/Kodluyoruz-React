
// Data API URL
const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";

const loadingElement = document.getElementById("loading");
const resultTable = document.querySelector(".table");
resultTable.style.display = "none"
loadingElement.style.display = "block";

setTimeout(() => {

    // Fetching Data
    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            
            const dataList = document.querySelector(".dataList");
            
            data.map((user) => {
                
                loadingElement.style.display = "none";
                resultTable.style.display = "block";
                const tr = document.createElement("tr");
    
                tr.innerHTML = `
                            <th scope="row">${user.id}</th>
                            <td>${user.title}</td>
                            <td>
                            ${user.completed
                                ? '<i class="fa-solid fa-check" style="color: #3cbe19;"></i>'
                                : '<i class="fa-solid fa-xmark" style="color: #cb1010;"></i>'
                            }
                            </td>
                        `;
    
                dataList.appendChild(tr);
    
            })
        });
}, 800);

