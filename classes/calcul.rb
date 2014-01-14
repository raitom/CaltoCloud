class Calcul < EventMachine::Connection
  def initialize
    super
  end

  def receive_data data
    Console.show "New calcul received : #{data.chomp}", 'info'
    begin
      result = eval data.chomp
      send_data result
      Console.show "Result : #{result}", 'info'
    rescue NameError
      send_data nil
      Console.show "Can't calulcate !", 'error'
    end
    close_connection
  end
end