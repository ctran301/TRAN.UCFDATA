from splinter import Browser
from bs4 import BeautifulSoup as bs
import time


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path ={'excutable_path':'/static/assets/chromedriver.exe'}
    return Browser("chrome", **executable_path, headless=False)


def scrape():
    browser = init_browser()

    # Link for latest news on Mars
    url = "https://mars.nasa.gov/news/"
    browser.visit(url)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, "html.parser")
        
    # Scrape news info
    news_title=soup.find('div', class_="bottom_gradient").text
    news_description = soup.find('div', class_="rollover_description_innner").text

    # Featured homepage image
    # Latest featured image
    featured_image = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    browser.visit(featured_image)

    #Navigate to Link
    browser.click_link_by_partial_text('Click for Full Image')
    time.sleep(10)
    browser.click_link_by_partial_text('More Info')

    #get html code once at page
    img_html = browser.html

    #Scrap into Soup/parse
    soup = bs(img_html, "html.parser")
        
    #Full path
    img_html = soup.find('figure').a['href']
    featured_image_url = "https://www.jpl.nasa.hov" + img_url 

    
    #Mars Weather through Twitter

    mars_weather = "https://twitter.com/marswxreport?lang=en"
    browser.visit(mars_weather)
    weather_html = browser.html

    soup = bs(weather_html, "html.parser")
    mars_weather_url = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text




# Store data in a dictionary
    mars_data = {
        "News_Title": news_title,
        "News_Description": news_description,
        "Featured_Image": featured_image_url,
        "Mars_Weather": mars_weather_url,
    #    "mars_hemis":hemi_images_url
        }

    # Close the browser after scraping
    browser.quit()

    # Return results
    return mars_data
