document.addEventListener(
  "DOMContentLoaded",
  () =>
     {
    const validateButton = document.getElementById("validate");
    validateButton.addEventListener("click", (even) => {
      const montext = document.getElementById("montext").value;
      const montant = parseFloat(document.getElementById("montant").value);
      const totalMontantDepenses = document.getElementById("monprix1Depenses");
      //const modifierLigne= document.getElementById('monModif');

      // récupération du champs contenant le total des depenses
      if (!montext || !montant || montant<0) {
        alert("veuiller remplir les champs normalement");
        return;
      }
      ajouterLigneToTable(montext, montant), ".deleteLigne";

      let totalDepenses = parseFloat(totalMontantDepenses.textContent) || 0;
      totalDepenses += montant;

      totalMontantDepenses.textContent = totalDepenses.toFixed(2);
      mettreajour();
      
      if(totalDepenses<0){
        document.getElementById('monprix1Depenses').innerHTML=null;
        let notesDepense = document.getElementById('monNote');
        notesDepense.innerHTML='veuiller entrer un bon montant';
        notesDepense.style.color="red";
        notesDepense.style.fontSize="15PX"

          
        
      }else if(totalDepenses >0){
        document.getElementById('monprix1Depenses').innerHTML;
        document.getElementById('monNote').innerHTML=null;
      }
        
      else{
        return false
      }
   

    });
   
    function ajouterLigneToTable(montext, montant, deleteLigne,) {
      const tbodyTr = document.querySelector(".monTableBody");

      const newRow = `
        <tr>
            <td id="montext">   
                ${montext}
            </td>
            <td id="montant" class="deleteDepense">
                ${montant}
            </td>
           
            <td class="mesbuttons">
                <button type="button" class="${deleteLigne}" id="monSupp">supprimer</button>
                 
            </td>
        </tr>

      
    `;

      tbodyTr.insertAdjacentHTML("afterbegin", newRow);

      const buttonSupprimerLigne = tbodyTr.querySelector(`.${deleteLigne}`);
     

      buttonSupprimerLigne.addEventListener("click", function () {
        const supprimerLigne = this.closest("tr");
        const MontantToDelete = parseFloat(supprimerLigne.querySelector(".deleteDepense").textContent);
        let ToutDesDepenses = parseFloat(document.getElementById("monprix1Depenses").textContent) || 0;
    
        ToutDesDepenses -= MontantToDelete;
        document.getElementById("monprix1Depenses").textContent = ToutDesDepenses.toFixed(2);
        supprimerLigne.remove();
       
    
        mettreajour();

       
      });
     
  



 

   
  
    
    }

    //Table revenus
    const validateButton1 = document.getElementById("validate1");
    validateButton1.addEventListener("click", (even) => {
      const montext1 = document.getElementById("montext1").value;
      const montant1 = parseFloat(document.getElementById("montant1").value);

      const totalMontantRevenus1 = document.getElementById("monprixRevenus");

      if (!montext1 || !montant1 || montant1<0) {
       
       
        alert("veuiller remplir  les champs normalement");
        return;
      }

      ajouterLigneToTable1(montext1, montant1), ".deleteLigne1";

      let totalRevenus1 = parseFloat(totalMontantRevenus1.textContent) || 0;
      totalRevenus1 += montant1;

      totalMontantRevenus1.textContent = totalRevenus1.toFixed(2);
      if(totalRevenus1<0){
        document.getElementById('monprixRevenus').innerHTML=null;
        let monNoteRevenu= document.getElementById('monNoteRevenu');
        monNoteRevenu.innerHTML="veuiller entrer un bon montant";
        monNoteRevenu.style.color="red";
        monNoteRevenu.style.fontSize="15PX"
      }else if(totalRevenus1>0){
          document.getElementById('monprixRevenus').innerHTML;
          document.getElementById('monNoteRevenu').innerHTML=null;

      }else{
        return false;
      }
      mettreajour();
    });

    function ajouterLigneToTable1(montext1, montant1, deleteLigne1) {
      const tbodyTr1 = document.querySelector(".monTableBody1");

      const newRow1 = `
        <tr>
            <td id="montext1">   
                ${montext1}
            </td>
            <td id="montant1" class="deleteRevenu">
                ${montant1}
            </td>
            <td>
                <button type="button" class="${deleteLigne1}" id="monSupp1">supprimer</button>
            </td>
        </tr>
    `;

      tbodyTr1.insertAdjacentHTML("afterbegin", newRow1);

      const buttonSupprimerLigne1 = tbodyTr1.querySelector(`.${deleteLigne1}`);

      buttonSupprimerLigne1.addEventListener("click", function () 
      {
        const supprimeLigne1 = this.closest("tr");
        supprimeLigne1.remove();
        const MontanttodeleteRevenu = parseFloat(supprimeLigne1.querySelector('.deleteRevenu').textContent);
        let toutDesRevenus = parseFloat(document.getElementById('monprixRevenus').textContent) || 0;
        toutDesRevenus -= MontanttodeleteRevenu;
        document.getElementById('monprixRevenus').textContent = toutDesRevenus.toFixed(2);
        mettreajour();
      });

    

        //console.log(monAutreRevenu1);

     
      ;

      //table soldes
    

    
  }

  function mettreajour() 
    {
      const depenses2 = document.getElementById("monprix1Depenses").textContent || 0;
      const revenu2 = document.getElementById("monprixRevenus").textContent || 0;

      const solde = revenu2 - depenses2;

      document.getElementById("monSoldes").textContent = solde.toFixed(2);


      if (solde < 0 || depenses2<0 || revenu2<0) {

        document.getElementById("monSoldes").innerHTML = null;
        const monNote = document.getElementById("notes");
        monNote.innerHTML = "solde insufisant";
        monNote.style.color = "red";
      } else if (solde > 0) {
        const monsolde = document.getElementById("notes");
        monsolde.innerHTML = "votre solde est positif";
        monsolde.style.color = "green";
      } else {
        const monsolde = document.getElementById("notes");
        monsolde.innerHTML = "votre solde est vide";
        monsolde.style.color = "black";
      }

    }
  //mettreajour()
})

const addForm = document.getElementById("addForm");
const monButton = document.getElementById("AddButton");
const maValidate = document.getElementById("validate");
const close = document.querySelector(".close");

//const deletedresult = document.querySelector(".deleted");

maValidate.onclick = function () {
  addForm.style.display = "none";
};
monButton.onclick = function () {
  addForm.style.display = "block";
};
close.onclick = function () {
  addForm.style.display = "none";
};

const addForm1 = document.getElementById("addForm1");
const monButton1 = document.getElementById("AddButton1");
const maValidate1 = document.getElementById("validate1");
const close1 = document.querySelector(".close1");

maValidate1.onclick = function () {
  addForm1.style.display = "none";
};

monButton1.onclick = function () {
  addForm1.style.display = "block";
};

close1.onclick = function () {
  addForm1.style.display = "none";
};

//Affichage des montants
