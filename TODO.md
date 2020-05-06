## Listado de TODOs...

* [ ] Funcionalidad 
  * [ ] Implementar el pool de comandos
    * [ ] Filtrar los mensajes por los comandos entrantes (aplicar correspondiente bloqueo)
  * [ ] Invocación del Bot
    * "Bloquear" el spam mediante un timeout (quizá?)
      * Que esa persona sea la única que pueda conversar con el bot
      * O que esa persona solo pueda hablar con el bot cada X tiempo (objeto clave valor con el @ y la fecha de último mensaje) y un timeout por defecto... 🤔
  * [ ] Chatear con el Bot
    * Mediante emojis se establece una conversación de configuración
  * [ ] Ver si se puede scrappear la página web 
    * Enviar los datos
    * Obtener el link de la lobby

* [ ] Refactor
  * [ ] Extraer los métodos a funciones en otros archivos

### NOTAS:
* Flujo de trabajo:
1. Usuario manda mensaje
2. Bot comprueba el comando
    1. Si es comando de `!pinturillo`: Comprueba que el bot no está *bloqueado* por otro usuario
        1. Si está bloqueado: El bot no le hará caso y enviará un mensaje informativo.
        2. Si no está bloqueado: Solo le hará caso a él (para que configure la página). *Bloqueado para el resto*
    2. Si es otro comando, efectuará dicha lógica



El usuario pide el comando