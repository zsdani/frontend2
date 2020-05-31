# frontend2

<h3>Szekvencia diagram</h3>


![image](https://user-images.githubusercontent.com/61462292/83352222-5956f580-a34a-11ea-91f6-d6f979b2c953.png)



<h3>Fejlesztői környezet</h3>

Használt technológiák: JAVA Spring, hibernate, Maven, H2 Database, Lombok, Spring Security, Angular 8.3.5, Bootstrap

 <ul>
   <li> Backend: IntelliJ IDEA </li>
   <li> Frontend: Visual Studio Code </li>
</ul>
    
<h3>Könyvtárstruktúra:</h3>
Backend

![konyvtar](https://user-images.githubusercontent.com/47753407/79596229-79a35b80-80e0-11ea-9c95-9946a8226c47.png)

Frontend

![image](https://user-images.githubusercontent.com/61462292/83350940-08da9a80-a340-11ea-908e-0c52f5881d8c.png)
![image](https://user-images.githubusercontent.com/61462292/83350954-2d367700-a340-11ea-865a-0b7c6dac472e.png)


<h3>Kliensoldali szolgáltatások:</h3>
<ul>
   <li>Ajax hívások: az alkalmazás az oldal újratöltése nélkül kommunikál a szerverrel</li>
   <li>Bejelentkezés: form kitöltése után validáció, sikertelen bejelentkezés esetén oldal elérésének megtagadása</li>
   <li>Tantárgyak betöltése főoldalon dinamikusan frissülő lista</li>
   <li>Intuitív működés: Tantárgyak/Épületek törlése, módosítása, felvétele gombnyomásra</li>
   <li>Intuitív működés: Személyek törlése gombnyomásra</li>
   <li>Kijelentkezés</li>
</ul>

<h3>Kapcsolat:</h3>
Az alkalmazás Ajax REST API hívásokkal kommunikál a backend-del.

<h3>Egy funkció bemutatása: Tárgy törlése</h3>
Tantárgyak listáján, a 'Töröl' gomb kattintására törölhetjük az adott tantárgyat tanárként:

![image](https://user-images.githubusercontent.com/61462292/83327595-5215e600-a27d-11ea-9485-ee9e5eefc7d6.png)

Folyamat:
<ol>
   <li>A tárgy sorába való kattintással meghívjuk a onSelectIssue metódust</li>
   <li>majd a selectel-t issue-n meghívjuk a onDeleteClick</li>
   <li>és azonbelül meghívódik a deleteIssuemetódust megvárjuk amíg tőrlődik az issue majd frissítjük az issuelistet.</li>
   <li>Sikeres service hívás esetén a tantárgyak listája frissül.</li>
</ol>

<h3>Felhasználói dokumentáció</h3>
<ul>
   <li><b>Bejelentkezés</b>: felhasználónév és jelszó segítségével</li>
   
   ![image](https://user-images.githubusercontent.com/61462292/83328396-eafb3000-a282-11ea-9cee-a183521760a6.png)
   
   <li><b>Navigációs sáv</b>: tartalmazza az egyes menüpontokat és a kijelentkezés gombot.</li>
   
   ![image](https://user-images.githubusercontent.com/61462292/83351065-307e3280-a341-11ea-9b6f-87cf4c00d831.png)
   
   <li><b>Főoldal:</b> 
      <ol>
         <li>Tanulóként megjelenik a felvehető tárgyak a listája. A lista elemek a jobb oldali 'Hozzá ad' gombbal lehetne hozzá adni a             tárgyainkhoz.</li>
         
   ![image](https://user-images.githubusercontent.com/61462292/83352400-5e687480-a34b-11ea-8654-7aadd89dddfc.png)
   
         
   <li>Tanárként megjelenik bal felül egy "Új tárgy" gomb, illetve a "Hozzá ad" helyett "Törlés" gomb jelenik meg. Törlés gomb működik és tanárként ki lehet törölni tárgyakat. Az új tárgy gomb megnyomásával, let megjelenik egy form amit ha helyesen tölt ki a tanár, akkor képes menteni és a listában meg is jelenik az új tárgy. Módosítani is lehet a tárgyat, ezt pedig tárgy mellé kattintásval lehet elérni, ilyenkor is lent megjelenik a form és a megfelelő mezők be it töltődnke.  </li>
 
 ![image](https://user-images.githubusercontent.com/61462292/83352641-41cd3c00-a34d-11ea-99fd-fb7a1cf05cfe.png)
</ol>
   
   
   
 <li>A tárgy nevére való kattintással a felhasználót elnavigálja a weboldal egy új oldalra, ahol megtekintheti részletesen a tárgy jellemzőit</li>
 
![image](https://user-images.githubusercontent.com/61462292/83352745-126aff00-a34e-11ea-82b4-b7e829f413ee.png)

<li>Ha a felhasználó rákattint a helyszín id-re, akkor az oldal elnavigálja az épületek listájához</li>

![image](https://user-images.githubusercontent.com/61462292/83353018-e9e40480-a34f-11ea-8551-b2fd3146920c.png)

<li>A menüben a Felhasználók kezelés-re kattintva <b>tanárként</b> megjelennek a felhasználók és adataik. Törölni is képes a tanár a felhasználókat. <b>Tanulóként</b> erre a manüpontra való kattintással nem történik semmi, mivel ehez a tanulónak nincs joga.</li>

![image](https://user-images.githubusercontent.com/61462292/83352893-15b2ba80-a34f-11ea-954b-86d1536460fa.png)

<li>Épületeknél <b>tanárként</b> úgyan úgy mint a tantárgyaknál tud módosítani/ törölni és újat létrehozni. <b>Diákként</b> csak megtekinteni lehet.</li>

![image](https://user-images.githubusercontent.com/61462292/83352956-7e9a3280-a34f-11ea-80df-90c0e3b0ca2f.png)

<li>Kilpés-re kattintással a bejelentkező oldalra navigál a weboldal</li>

![image](https://user-images.githubusercontent.com/61462292/83353057-26176500-a350-11ea-97e2-275dc9aa8d21.png)


 
</ul>
