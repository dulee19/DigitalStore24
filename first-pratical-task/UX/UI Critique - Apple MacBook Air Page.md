# UX/UI Critique – Apple MacBook Air Page
# Page: https://www.apple.com/macbook-air/

# 1. No Sticky Navigation on Scroll
# Problem: When you scroll down, the navigation disappears — users have to scroll all the way back up to move around.
# Suggestion: Add a sticky nav bar that stays visible while scrolling. It’ll make the site easier to navigate, especially for longer pages.

# 2. Hero Text Is Too Big on Mobile
# Problem: On smaller screens, the main heading takes up way too much space and pushes content down.
# Suggestion: Use responsive font sizes (like clamp() or media queries) so the text scales better on different devices.

# 3. Homepage Feels Overwhelming
# Problem: There’s a lot of content on the homepage, which makes it hard to know where to focus.
# Suggestion: Break things up a bit — use clearer headings, more spacing, and maybe hide some sections behind “Read more” buttons or move them to separate pages.

# 4. No Dark Mode Option
# Problem: Browsing at night can be hard on the eyes without a dark theme.
# Suggestion: Add a dark mode toggle or auto-detect based on user preferences using prefers-color-scheme or using pure JavaScript.  It’s a small change with a big impact on comfort.

# 5. Too Many Animations
# Problem: All the scroll animations look nice, but they can slow things down especially on older devices.
# Suggestion: Tone them down a bit. Keep the most important ones and lazy-load animations where possible to keep the experience smooth.