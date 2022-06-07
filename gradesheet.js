
			/* Javascript */

				/* English score */

			function english() {

		var engScore=document.getElementById('eng').value;
		var grade="";

				if(engScore >= 70 && engScore <=100){
						grade = 'A';
					}else if(engScore >= 60 && engScore <=69){
						    grade = 'B';
					}else if(engScore > 50 && engScore < 60){
							grade = 'C';
					}else if(engScore > 45 && engScore <= 50){
						    grade = 'D';
					}else if(engScore > 40 && engScore <= 45){
						    grade = 'E';
					}else if(engScore <= 40){
						grade = 'F';

					}

				var result=document.getElementById('grd');
				
				result.value=grade;
			

				}

					/* Maths score */

			function maths() {

		var mthScore=document.getElementById('mth').value;
		var grade="";

				if(mthScore >= 70 && mthScore <=100){
						grade = 'A';
					}else if(mthScore >= 60 && mthScore <=69){
						    grade = 'B';
					}else if(mthScore > 50 && mthScore < 60){
							grade = 'C';
					}else if(mthScore > 45 && mthScore <= 50){
						    grade = 'D';
					}else if(mthScore > 40 && mthScore <= 45){
						    grade = 'E';
					}else if(mthScore <= 40){
						grade = 'F';

					}

				var result=document.getElementById('grd1');
				
				result.value=grade;
			

				}

					/* Chemistry score */

			function chemistry() {

		var chmScore=document.getElementById('chm').value;
		var grade="";

				if(chmScore >= 70 && chmScore <=100){
						grade = 'A';
					}else if(chmScore >= 60 && chmScore <=69){
						    grade = 'B';
					}else if(chmScore > 50 && chmScore < 60){
							grade = 'C';
					}else if(chmScore > 45 && chmScore <= 50){
						    grade = 'D';
					}else if(chmScore > 40 && chmScore <= 45){
						    grade = 'E';
					}else if(chmScore <= 40){
						grade = 'F';

					}

				var result=document.getElementById('grd2');
				
				result.value=grade;
			

				}

					/* Biology score */

			function biology() {

		var bioScore=document.getElementById('bio').value;
		var grade="";

				if(bioScore >= 70 && bioScore <=100){
						grade = 'A';
					}else if(bioScore >= 60 && bioScore <=69){
						    grade = 'B';
					}else if(bioScore > 50 && bioScore < 60){
							grade = 'C';
					}else if(bioScore > 45 && bioScore <= 50){
						    grade = 'D';
					}else if(bioScore > 40 && bioScore <= 45){
						    grade = 'E';
					}else if(bioScore <= 40){
						grade = 'F';

					}

				var result=document.getElementById('grd3');
				
				result.value=grade;
			

				}

				/* French score */

			function french() {

		var fScore=document.getElementById('frnch').value;
		var grade="";

				if(fScore >= 70 && fScore <=100){
						grade = 'A';
					}else if(fScore >= 60 && fScore <=69){
						    grade = 'B';
					}else if(fScore > 50 && fScore < 60){
							grade = 'C';
					}else if(fScore > 45 && fScore <= 50){
						    grade = 'D';
					}else if(fScore > 40 && fScore <= 45){
						    grade = 'E';
					}else if(fScore <= 40){
						grade = 'F';

					}

				var result=document.getElementById('grd4');
				
				result.value=grade;
			

				}

				/* TOTAL */

				function total(){
					
					var engScore=document.getElementById('eng').value;
					var mthScore=document.getElementById('mth').value;
					var chmScore=document.getElementById('chm').value;
					var bioScore=document.getElementById('bio').value;
					var fScore=document.getElementById('frnch').value;

					var total = Number(engScore) + Number(mthScore) + Number(chmScore)  + Number(bioScore)
					 + Number(fScore);

					document.getElementById('mytotal').innerHTML = total;

					var total2 = total1 / Number(5);

					document.getElementById('myaverage').innerHTML = total2;
				}



						/* AVERAGE */

				function average(){

					var engScore=document.getElementById('eng').value;
					var mthScore=document.getElementById('mth').value;
					var chmScore=document.getElementById('chm').value;
					var bioScore=document.getElementById('bio').value;
					var fScore=document.getElementById('frnch').value;

					var total1 = Number(engScore) + Number(mthScore) + Number(chmScore)  + Number(bioScore)
					 + Number(fScore);

					var total2 = total1 / Number(5);

					document.getElementById('myaverage').innerHTML = total2;
				}
 
 					/* REMARKS */

				function remarks() {

					var engScore=document.getElementById('eng').value;
					var mthScore=document.getElementById('mth').value;
					var chmScore=document.getElementById('chm').value;
					var bioScore=document.getElementById('bio').value;
					var fScore=document.getElementById('frnch').value;

				var total1 = Number(engScore) + Number(mthScore) + Number(chmScore)  + Number(bioScore)
					 + Number(fScore);

				var total2 = total1 / Number(5);


					
					if (total2 > 50) {

						var remarks = 'GOOD JOB';

						document.getElementById('myremarks').innerHTML = remarks;

					}else{

						var remarks = 'FAIL';

						document.getElementById('myremarks').innerHTML = remarks;


					}


				
				}
	
	


