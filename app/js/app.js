import Ractive from 'ractive';
import AppTemplate from './views/app.html';

var App = new Ractive({
	el: '#app',
	template: AppTemplate,
	data: {
		greeting: 'Hello',
		recipient: 'Paquitosoft'
	}
});

console.log(AppTemplate);
console.log(typeof AppTemplate);