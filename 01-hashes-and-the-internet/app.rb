require "rest-client"
require "pry"
require "json"


# Get a search term from the user
def get_search_term
  puts "Please enter a search term"
  gets.chomp
end

# Make a request with that search term
def make_request(search_term)
  JSON.parse(RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}"))
end

# Get back all the books

def get_books(response)
  response["items"]
end

# For all the books we get back, we'll output each book's title

def get_book_title(book)
  book["volumeInfo"]["title"]
end

def output_book_titles(books)
  books.each do |book|
    puts get_book_title(book)
  end
end

def run
  search_term = get_search_term
  response = make_request(search_term)
  books = get_books(response)
  output_book_titles(books)
end
run
