class TableManager {

  connectEventHandlers() {
      document.getElementById('btn-nuke-first-row')
        .addEventListener(
          'click',
          this.onSubmit.bind(this));
      }

  onSubmit(event) {
      event.preventDefault();

      const currentHead = document.querySelector('TBODY TR');
      currentHead.remove()
      }

  };

  const tableManager = new TableManager();
  tableManager.connectEventHandlers();

/*
  const nukeButton = document.getElementById('btn-nuke-first-row');
  const topRow = document.querySelector('TBODY TR');
  console.log(topRow);


  const removeTopRow = function() {
    event.preventDefault();

    return console.log('tried');

  }

  nukeButton.addEventListener('click', removeTopRow());
};
// your code here
   
*/