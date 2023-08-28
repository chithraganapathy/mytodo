const items = document.querySelectorAll('span.completed')
const del = document.querySelectorAll('.del')
const incompleteItems = document.querySelectorAll('span.incomplete')

Array.from(items).forEach((item) => {
	item.addEventListener('click', markIncomplete)
})

Array.from(del).forEach((item) => {
	item.addEventListener('click', deleteTodo)
})

Array.from(incompleteItems).forEach(item => {
	item.addEventListener('click', markComplete)
})

async function markComplete() {
	const todoId = this.parentNode.dataset.id
	console.log(todoId)
	try{
		const response = await fetch('/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
    	console.log(err)
    }	
}

async function deleteTodo() {
	const todoId = this.parentNode.dataset.id
	try{
		const response = await fetch('/remove', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
    	console.log(err)
    }	
}


async function markIncomplete() {
	const todoId = this.parentNode.dataset.id
	console.log(todoId)
	try{
		const response = await fetch('/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
    	console.log(err)
    }	
}