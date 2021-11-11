window.onload = function loadEvent() {

  const genderList = ["male", "female"]

  const raceList = ["blood-elf", "draenei", "dwarf", "gnome", "human", "night-elf", "orc", "tauren", "troll", "undead"]

  const classList = [ "warrior", "paladin", "death knight", "hunter", "shaman", "mage", "warlock", "druid", "priest", "rogue"]

  let charCard = document.getElementById('header');

// ---HEADER---

  let headerTitle= document.createElement('h1');
  headerTitle.textContent = "Your character sheet";
  headerTitle.id = "h1";
  // headertitle.classList.add("h1");
  charCard.appendChild(headerTitle);

// ---COLUMN-LEFT---

  let columnLeft = document.getElementById('column_left'); 

    let charName = document.createElement('label');
      charName.textContent = "Character name";
      charName.style.height = "100px",
      charName.style.border = "1px solid red";
      columnLeft.appendChild(charName);      

      let nameInput = document.createElement("input");
      nameInput.placeholder = "Start typing here";
      charName.appendChild(nameInput);
      
// ---gender 
    let gender = document.createElement('label');
    gender.textContent = "Your gender...";
    gender.style.height = "100px",
    gender.style.border = "1px solid red";
    columnLeft.appendChild(gender);

      let genderChoose = document.createElement("select");
      genderChoose.id = "gender-list";
      gender.appendChild(genderChoose);
      
      let defGender = document.createElement("option");
      defGender.textContent = "Your turn";
      defGender.style.display = "none";
      genderChoose.appendChild(defGender);

      for ( let i of genderList) {
        let g = i
        let gOption = document.createElement("option")
        gOption.textContent = g;
        gOption.value = g;
        genderChoose.appendChild(gOption);
      }
  
// ---race
    let race = document.createElement('label');
    race.textContent = "Your race...";
    race.style.border = "1px solid red";
    columnLeft.appendChild(race);
  
      let raceChoose = document.createElement("select");
      race.appendChild(raceChoose);

      let defRace = document.createElement("option");
      defRace.textContent = "Your turn";
      defRace.style.display = "none";
      raceChoose.appendChild(defRace);

      for ( let i of raceList) {
        let r = i
        let rOption = document.createElement("option")
        rOption.textContent = r;
        rOption.value = r;
        raceChoose.appendChild(rOption);
      }

// ---class 
    let myClass = document.createElement('label');
    myClass.textContent = "Your class...";
    myClass.style.border = "1px solid red";
    columnLeft.appendChild(myClass);
    
      let classChoose = document.createElement("select");
      myClass.appendChild(classChoose);  

      let defClass = document.createElement("option");
      defClass.textContent = "Your turn";
      defClass.style.display = "none";
      classChoose.appendChild(defClass);

      for ( let i of classList) {
        let c = i
        let cOption = document.createElement("option")
        cOption.textContent = c;
        cOption.value = c;
        classChoose.appendChild(cOption);
      }

// ---COLUMN-RIGHT---

  let columnRight = document.getElementById("column_right");
  
    let inputedCharName = document.createElement('h2');
    inputedCharName.textContent = "";
    inputedCharName.style.height = "100px",
    inputedCharName.style.border = "1px solid red";
    inputedCharName.style.textAlign = "center"
    columnRight.appendChild(inputedCharName); 

    function updateName(e) {
      inputedCharName.textContent = e.target.value;
    }
    nameInput.addEventListener('input', updateName);

// ---gender
    let finalGender = document.createElement('div');
    finalGender.style.height = "100px";
    finalGender.style.border = "1px solid red";
    finalGender.id = "gender-div";
    columnRight.appendChild(finalGender);

    let inputedGender = document.createElement('h2');
    inputedGender.textContent = "";
    inputedGender.style.width = "300px",
    inputedGender.style.height = "100px",
    inputedGender.style.border = "1px solid red";
    inputedGender.id = "gender-title";
    finalGender.appendChild(inputedGender);
    
    let genderChoosen = document.createElement("div");
    genderChoosen.style.border = "1px solid red";
    genderChoosen.id = "gender-photo";
    finalGender.appendChild(genderChoosen);

    function updateGender(e) {
      switch(genderChoose.value) {
        case 'male':
          inputedGender.textContent = "male";
          genderChoosen.style.backgroundImage = "url('icons/male.png')";
        break;
        case 'female':
        inputedGender.textContent = "female";
        genderChoosen.style.backgroundImage = "url('icons/female.png')";
        break;
      }
    }

    genderChoose.addEventListener('input', updateGender);
   
// ---race
    let finalRace = document.createElement('div');
    finalRace.style.height = "100px";
    finalRace.style.border = "1px solid red";
    finalRace.id = "race-div";
    columnRight.appendChild(finalRace);

    let inputedRace = document.createElement('h2');
    inputedRace.textContent = "";
    inputedRace.style.width = "300px",
    inputedRace.style.height = "100px",
    inputedRace.style.border = "1px solid red";
    inputedRace.id = "race-title";
    finalRace.appendChild(inputedRace);
  
    let raceChoosen = document.createElement("div");
    raceChoosen.style.border = "1px solid red";
    raceChoosen.id = "race-photo";
    finalRace.appendChild(raceChoosen);

    function updateRace(e) {
      switch(raceChoose.value) {
        case 'blood-elf':
          inputedRace.textContent = "Blood-elf";
          raceChoosen.style.backgroundImage = "url('icons/races/bloodelf.png')";
        break;
        case 'draenei':
        inputedRace.textContent = "Draenei";
        raceChoosen.style.backgroundImage = "url('icons/races/draenei.png')";
        break;
        case 'dwarf':
          inputedRace.textContent = "Dwarf";
          raceChoosen.style.backgroundImage = "url('icons/races/dwarf.png')";
        break;
        case 'gnome':
        inputedRace.textContent = "Gnome";
        raceChoosen.style.backgroundImage = "url('icons/races/gnome.png')";
        break;
        case 'human':
          inputedRace.textContent = "Human";
          raceChoosen.style.backgroundImage = "url('icons/races/human.png')";
        break;
        case 'night-elf':
        inputedRace.textContent = "Night-elf";
        raceChoosen.style.backgroundImage = "url('icons/races/nightelf.png')";
        break;
        case 'orc':
          inputedRace.textContent = "Orc";
          raceChoosen.style.backgroundImage = "url('icons/races/orc.png')";
        break;
        case 'tauren':
        inputedRace.textContent = "Tauren";
        raceChoosen.style.backgroundImage = "url('icons/races/tauren.png')";
        break;
        case 'troll':
          inputedRace.textContent = "Troll";
          raceChoosen.style.backgroundImage = "url('icons/races/troll.png')";
        break;
        case 'undead':
        inputedRace.textContent = "Undead";
        raceChoosen.style.backgroundImage = "url('icons/races/undead.png')";
        break;
      }
    }

    raceChoose.addEventListener('input', updateRace);

// ---class
    let finalClass = document.createElement('div');
    finalClass.style.height = "100px";
    finalClass.style.border = "1px solid red";
    finalClass.id = "class-div";
    columnRight.appendChild(finalClass); 

    let inputedClass = document.createElement('h2');
    inputedClass.textContent = "";
    inputedClass.style.width = "300px",
    inputedClass.style.height = "100px",
    inputedClass.style.border = "1px solid red";
    inputedClass.id = "class-title";
    finalClass.appendChild(inputedClass);
    
    let classChoosen = document.createElement("div");
    classChoosen.style.border = "1px solid red";
    classChoosen.id = "class-photo";
    finalClass.appendChild(classChoosen);  

    function updateClass(e) {
      switch(classChoose.value) {
        case 'death knight':
          inputedClass.textContent = "Death Knight";
          classChoosen.style.backgroundImage = "url('icons/classes/death knight.png')";
        break;
        case 'druid':
        inputedClass.textContent = "Druid";
        classChoosen.style.backgroundImage = "url('icons/classes/druid.png')";
        break;
        case 'hunter':
          inputedClass.textContent = "Hunter";
          classChoosen.style.backgroundImage = "url('icons/classes/hunter.png')";
        break;
        case 'mage':
        inputedClass.textContent = "Mage";
        classChoosen.style.backgroundImage = "url('icons/classes/mage.png')";
        break;
        case 'paladin':
          inputedClass.textContent = "Paladin";
          classChoosen.style.backgroundImage = "url('icons/classes/paladin.png')";
        break;
        case 'priest':
        inputedClass.textContent = "Priest";
        classChoosen.style.backgroundImage = "url('icons/classes/priest.png')";
        break;
        case 'rogue':
          inputedClass.textContent = "Rogue";
          classChoosen.style.backgroundImage = "url('icons/classes/rogue.png')";
        break;
        case 'shaman':
        inputedClass.textContent = "Shaman";
        classChoosen.style.backgroundImage = "url('icons/classes/shaman.png')";
        break;
        case 'warlock':
          inputedClass.textContent = "Warlock";
          classChoosen.style.backgroundImage = "url('icons/classes/warlock.png')";
        break;
        case 'warrior':
        inputedClass.textContent = "Warrior";
        classChoosen.style.backgroundImage = "url('icons/classes/warrior.png')";
        break;
      }
    }

    classChoose.addEventListener('input', updateClass);

}