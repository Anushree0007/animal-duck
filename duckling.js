class Duckling extends Duck {
  //overwrite parent constuctor
  constructor () {
    super(br="Duckling", name="lara", lang="Quackiee!!");
    this.breed = br
    this.name = name
    this.language = lang
  }
  
   talk(){
   print(this.language);
    
  }
  
  expressYourself(){
    print("Hello, I'm a "+this.breed+"! My name is, "+this.name+" and I talk "+this.language+" Quack! Quack!")
  }
}
