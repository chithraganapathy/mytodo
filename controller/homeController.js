const Todo = require('../models/Todo')

module.exports = {
	getTodo: async (req,res) => {
		try {
			const items = await Todo.find();
			res.render('home.ejs',{todos: items})
		}
		catch(err) {
			console.error(err)
		}
	},

	createTodo: async (req,res) => {
		console.log(req.body)
		try {
			await Todo.create({todo: req.body.todoItem, completed: false})
			res.redirect('/')
		}
		catch(err) {
            console.log(err)
		}
	},

	markComplete: async(req, res) => {
		try {
			await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {completed:true})
			res.json('Marked Complete')
		}catch(err) {
			console.log(err)
		}
	},

	removeItem: async(req, res) => {
		try{
			await Todo.findOneAndDelete({_id: req.body.todoIdFromJSFile})
			res.json('Item deleted')

		}catch(err) {
			console.log(err)
		}
	},

	markIncomplete: async(req,res) => {
		try{
			await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{completed:false})
			res.json('Marked Incomplete')

		}catch(err) {
			console.log(error)
		}
	}

}