class Swap {
  swappingImages() {
    let flutter = document.getElementById('image1');
    let apple = document.getElementById('image2');
        
    let flutterSrc = flutter.src;
    let appleSrc = apple.src;

    apple.src = flutterSrc;
    flutter.src = appleSrc;
  }

  addEventListener() {
    const button = document.getElementById('btn-cycle-ponies');
    button.addEventListener('click', this.swappingImages.bind(this)); 
  }
}

const swap = new Swap();
swap.addEventListener();
 