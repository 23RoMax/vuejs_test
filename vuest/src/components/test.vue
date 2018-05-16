<template>
  <div class="test">
    <section>
    <p v-if="returnCust" v-text="user.firstName + user.lastName"></p>
    <p v-text="welcomeMessage"></p>
    <input type="radio" value = true v-model="newCust">
    <label for="newCust">TESTTESTTEST</label>
    <br>
    <input type="radio" value = false v-model="newCust">
    <label for="returnCust">Bestehender Kunde</label>
    <br>
    <span v-if="newCust == true">Auswahl: Neukunde</span>
    <span v-else>Auswahl: Bestandskunde</span>
    </section>
    <div v-if="newCust">
      <hr>
      <h1>1. Kontoinformationen:</h1>
      <p>Um eine Bestellung abzuschließen, müssen Sie sich ein Konto anlegen, das auch gleichzeitig ihrem Nutzerkonto entsprechen wird.</p>
      <label for="Name">Vorname:</label>
      <input type="text" id="Name" value="Vorname" placeholder="Vorname" v-model="user.firstName">
      <br>
      <label for="Name">Nachname:</label>
      <input type="text" id="Name" value="Nachname" placeholder="Nachname" v-model="user.lastName">
      <br>
      <label for="Name">E-Mail:</label>
      <input type="text" id="Name" value="Nachname" placeholder="Nachname" v-model="user.email">
      <br>
      <label for="Geburtsdatum">Geburtsdatum:</label>
      <input type="date" id="Geburtsdatum" v-model="user.birthdate">
      <hr>
      <h1>2. Adressdaten:</h1>
      <label for="street">Straße:</label>
      <input type="text" id="street" placeholder="Musterstraße" v-model="address[0].street">
      <label for="number">Hausnummer:</label>
      <input type="text" id="number" placeholder="101a" v-model="address[0].number">
      <br>
      <label for="zip">PLZ:</label>
      <input type="text" id="zip" placeholder="10115" v-model="address[0].zip">
      <label for="city">Stadt:</label>
      <input type="text" id="country" placeholder="Deutschland" v-model="address[0].city">
      <br>
      <label for="country">Land:</label>
      <input type="text" id="city" placeholder="Berlin" v-model="address[0].country">
      <div v-if="user.firstName !== null && user.lastName !== null && address[0].street !== undefined && address[0].number !== undefined && address[0].zip !== undefined && address[0].city !== undefined && address[0].country !== undefined">
        <h3>Ihre Bestellung geht an:</h3>
        <span style="color: blue"> {{user.firstName + " " + user.lastName}}<br>
        {{address[0].street + " " + address[0].number}}<br>
        {{address[0].zip + " " + address[0].city}}<br>
        {{address[0].country}}</span>
      </div>
      <div v-if="address[0].country">
        <hr>
        <h1>3. Wählen Sie Ihre Softwarepakete</h1>
        <input type="number" id="bavwindows" v-model="bavwindows">
        <label for="bavwindows"> BAV-Werkzeug Windows Lizenz</label>
        <br>
        <input type="number" id="bavmac" v-model="bavmac">
        <label for="bavmac"> BAV-Werkzeug MacOS Lizenz</label>
        <br>
        <input type="number" id="bavandroid" v-model="bavandroid">
        <label for="bavandroid"> BAV-Werkzeug Android Lizenz</label>
        <br>
        <input type="number" id="bavios" v-model="bavios">
        <label for="bavios"> BAV-Werkzeug iOS Lizenz</label>
    </div>
    </div>
    <div v-else>
      <hr>
      <h1>Wählen Sie Ihre Softwarepakete</h1>
      <input type="number" id="bavwindows" v-model="bavwindows">
      <label for="bavwindows"> BAV-Werkzeug Windows Lizenz</label>
      <br>
      <input type="number" id="bavmac" v-model="bavmac">
      <label for="bavmac"> BAV-Werkzeug MacOS Lizenz</label>
      <br>
      <input type="number" id="bavandroid" v-model="bavandroid">
      <label for="bavandroid"> BAV-Werkzeug Android Lizenz</label>
      <br>
      <input type="number" id="bavios" v-model="bavios">
      <label for="bavios"> BAV-Werkzeug iOS Lizenz</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuest',
  data () {
    return {
      user: {
        firstName: null,
        lastName: null,
        email: null,
        birthdate: null
      },
      address: [{
        billing: {
          street: null,
          number: null,
          zip: null,
          city: null,
          country: null,
          add: null
        }
      },
      {
        location:
        {
          street: null,
          number: null,
          zip: null,
          city: null,
          country: null
        }
      }
      ],
      bavwindows: null,
      bavmac: null,
      bavandroid: null,
      bavios: null,
      welcomeMessage: 'Danke das Sie sich für die Vertriebssoftware von BAV-Werkzeug.de entschieden haben!',
      picked: null,
      newCust: false,
      returnCust: false
    }
  }
}
</script>
