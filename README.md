# mi-ji
Office Mi-Ji

# mi-ji
Office Mi-Ji

<!-- 

--------------------------------
With the below code;

1. Replace 'COLOUR' with the selected colour for the project.
  a. Choose from; pink | red | yellow | pistacio | grey | green

2. Replace 'PROJECTNAME' with the folder name for the project 

3. Add extra photos as needed by copying the picture section
  a. change the '01' to '02', '03' etc

4. Insert desired text 

5. Copy and paste code from the first '<div clas....' down

--------------------------------
In Github;

6. Create a new folder in the 'image' folder

-->


Copy from below here

        <div class="swiper-slide column COLOUR">
          <div class="carousel">
            <div class="photo">
              <picture class="blur">
                <source type="image/webp" srcset="./images/PROJECTNAME/01_800_Blur.webp">
                <source type="image/jpg" srcset="./images/PROJECTNAME/01_800_Blur.jpg">
                <img src="./images/PROJECTNAME/01_800_Blur.JPG" width="800" height="1200" alt="photo of the PROJECTNAME project">
              </picture>
              <picture class="clear">
                <source type="image/webp" srcset="./images/PROJECTNAME/01_800.webp">
                <source type="image/jpg" srcset="./images/PROJECTNAME/01_800.jpg">
                <img src="https://mi-ji.com.au/images/PROJECTNAME/01_800.JPG" width="800" height="1200" alt="photo of the PROJECTNAME project">
              </picture>
            </div>
            <div class="plan" data-collapsed="true" style="height: 0px">
              <picture>
                <source type="image/svg" srcset="./images/PROJECTNAME/Plan_800.svg">
                <img src="./images/PROJECTNAME/Plan_800.svg" width="800" height="1120" alt="architectural plan of the PROJECTNAME project">
              </picture>
            </div>
          </div>
          <div class="words-box">
            <span class="words">Insert text here
            </span>
          </div>
        </div>
