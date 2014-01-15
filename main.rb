#Inclusion des gems
require 'colored'
require 'eventmachine'
require 'websocket-eventmachine-server'
require 'logger'

#Chargement automatique de tous les helpers
Dir["./helpers/*.rb"].each {|file| require file }

#Démarrage du serveur
EM.run do
  Console.show "Serveur démarré", 'success'

  WebSocket::EventMachine::Server.start(:host => "0.0.0.0", :port => 12369) do |ws|
    #Fonction à l'ouverture du socket
    ws.onopen do
      Console.show "Client connecté", 'success'
    end

    #Calcul reçu
    ws.onmessage do |msg|
      Console.show "New calcul received : #{msg.chomp}", 'info'

      begin
        result = eval msg.chomp
      rescue NameError, SyntaxError, ZeroDivisionError
        result = nil
      end

      Console.show "Result : #{result}", 'info'
      ws.send result
    end

    #Déconnexion du client
    ws.onclose do
      Console.show "Client deconnecté", 'info'
    end
  end
end