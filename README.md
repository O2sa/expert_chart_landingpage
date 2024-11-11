# Setup Guides
This the guides step by step to run the ChartExpert website.


**Prerequisites:**

1.  **Node.js and npm (or yarn)**

----

 **Open a terminal or command prompt and navigate to the root directory of the project using `cd`**


## Installing Website Dependencies and Building the Project

**1. Integrating Tawk.to Live Chat with Your Website (Including Multiple Languages)**

**This guide walks you through integrating Tawk.to live chat with your website, supporting multiple languages with separate widget IDs.**

**Prerequisites:**

- A Tawk.to account (free tier available).

**Steps:**

**1. Create a Tawk.to Account and Property:**

1. Visit [https://www.tawk.to/](https://www.tawk.to/) and create a free Tawk.to account.
2. Follow the steps to create a new property for your website.
3. Make note of the **Property ID** displayed in the dashboard. You'll need it later.

**2. Add Multiple Language Widget IDs:**

1. Within your Tawk.to property dashboard, navigate to the **"Settings"** section.
2. Go to the **"Chat Widgets"** tab.
3. Here, you'll see the default widget ID for your property. This will be used for the main language on your website.
4. To add a widget for another language, click on **"Add Widget"**.
5. Customize the widget settings for the specific language. For example, you could configure the widget language and pre-defined messages.
6. Once finished, note down the unique **Widget ID** for this language. Repeat this process for additional languages you want to support.

**3. Set Up Environment Variables:**

- Inside the `.env` file, edit the following lines, replacing placeholders with your actual values:

  ```
  VITE_APP_TAWK_PROPERTY_ID=YOUR_PROPERTY_ID          # Replace with PROPERTY ID
  VITE_APP_TAWK_EN_WIDGET_ID=YOUR_ENGLISH_WIDGET_ID  # Replace with English widget ID
  VITE_APP_TAWK_AR_WIDGET_ID=YOUR_FRENCH_WIDGET_ID   # Replace with Arabic widget ID
  ```

- Do not forget to save the file

**4. Add google analytics and facebook pexiel:**
- Inside the `.env` file, edit the following lines, replacing placeholders with your actual values:

  ```
  VITE_FB_PIXEL_ID=YOUR_FACEBOOK_BIXEL_ID          # Replace with facebook ID
  VITE_GA_MEASUREMENT_ID=YOUR_GOOGLE_ID            # Replace with google analytics ID
  ```

- Do not forget to save the file

**5. Install Client Dependencies and Build the Website:**

- Navigate to the root folder.
- Run the following command in your terminal:
  ```bash
  npm install && npm run build
  ```
  This will install all the necessary dependencies for your React application and create an optimized production-ready build of your React application in the `dist` folder.



**Choose a Hosting Provider:**
- To host the website you can choose any hosting provider can running Nodejs apps, like:
    1. Netlify
    2. Render
    3. Heroku
    4. Hostinger (VPS)
    5. Vercel
    


