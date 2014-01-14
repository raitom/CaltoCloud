#Gestion des dépendances des gems
require 'colored'
require 'eventmachine'
require 'logger'

#Chargement automatique de toutes les clasess et helpers
Dir["./helpers/*.rb"].each {|file| require file }
Dir["./classes/*.rb"].each {|file| require file }

#Démarrage du serveur
EM.run do
  EM.start_server '0.0.0.0', 12369, Calcul

  Console.show 'Server is running', 'success'
end