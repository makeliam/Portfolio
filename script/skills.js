function filterSkills() {
    var filter = document.getElementById("skill-filter").value;
    var skills = document.querySelectorAll(".skill");
  
    skills.forEach(function (skill) {
      var category = skill.dataset.category.toLowerCase();
  
      if (filter === "all" || category === filter) {
        skill.style.display = "block";
      } else {
        skill.style.display = "none";
      }
    });
  }
  
  // Appel initial pour afficher toutes les compétences
  filterSkills();
  