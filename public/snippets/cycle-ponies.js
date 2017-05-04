// your code here

// not sure how to resolve having two ViewManagers

class ViewManager {
	connectEventHandlers() {
		document.getElementById('btn-cycle-ponies')
			.addEventListener(
				'click',
				this.swap.bind(this));
	}

	swap(event) {
		event.preventDefault();
		let el = document.querySelectorAll('div.my-little-pony');
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();