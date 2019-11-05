const gi = require('node-gtk');
const GTK = gi.require('Gtk', '3.0');

gi.startLoop()
GTK.init()

const app = new GTK.Window()

app.on('destroy', () => GTK.mainQuit())
app.on('delete-event', () => false)

app.setDefaultSize(400, 250)
app.add(new GTK.Label({label: 'Hello Node-GTK!'}))

app.showAll()
GTK.main()
