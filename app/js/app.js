$(document).ready(function(){        
        $("#warning").css("visibility", "hidden");
        $("#emailWarning").css("visibility", "hidden");

        var validUrl = false;

        $("input, select").change(function() {
          $("#warning").css("visibility", "hidden");

          //Validation for link to photo
          if (this.id === "inputPhotoLink") {
            
            $("#emailWarning").css("visibility", "hidden");
            validUrl = true;
            var VAL = this.value;

            $("#friendImage").attr("src", VAL);
            $('#friendImage').one("error", function() { 
                $("#emailWarning").css("visibility", "visible");
                validUrl = false;
                return
            });

          }
        });

        $("#submitButton").on("click", function(event) {
          event.preventDefault();

          if (
            $("#inputName").val() == "" ||
            $("#inputPhotoLink").val() == "" ||
            validUrl === false
          ) {
            $("#warning").css("visibility", "visible");
            return;
          }

          var scoresArray = [];
          var value = 0;
          var j = 1;
          for (i = 1; i < 11; i++) {
            if ($("#answer" + i.toString()).val() != null) {
              var scoreValue = parseInt(
                $("#answer" + i.toString())
                  .val()
                  .slice(0, 1)
              );
              scoresArray.push(parseInt(scoreValue));
            } else {
              $("#warning").css("visibility", "visible");
              return;
            }
          }
          var userInfo = {
            name: $("#inputName").val(),
            photo: $("#inputPhotoLink").val(),
            scores: scoresArray
          };

          $.post("/api/survey", userInfo).done(function(response) {
            $("#modalTitle").text(userInfo.name + "'s New Friend");
            $("#friendImage").attr("src", response.photo);
            $('#friendImage').one("error", function() { this.src = '../images/plankton.png'; });
            $("#friendName").text(response.name);
            $("#resultModal").modal("show");

            document.friendSurvey.reset();
          });
        });
    });