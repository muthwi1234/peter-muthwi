# How to Add Your Profile Photo

## Quick Steps:

1. **Prepare Your Photo**
   - Choose a professional photo of yourself
   - Recommended: Square image (e.g., 500x500px or 1000x1000px)
   - File formats: JPG, PNG, or WEBP
   - File size: Keep it under 500KB for fast loading

2. **Add Photo to Your Portfolio**

   **Option A: Using File Explorer**
   - Open the `public` folder in your project
   - Copy your photo into the `public` folder
   - Rename it to `profile.jpg` (or `profile.png` if PNG)

   **Option B: Using VS Code**
   - In VS Code, find the `public` folder in the left sidebar
   - Drag and drop your photo into the `public` folder
   - Rename it to `profile.jpg`

3. **Update the Config (if needed)**
   
   If you named your photo something other than `profile.jpg`, update `lib/site.ts`:
   
   ```typescript
   profileImage: "/your-photo-name.jpg", // Change this to match your filename
   ```

4. **Save and Check**
   - The dev server will automatically reload
   - Your photo will appear in a circular frame at the top of the homepage
   - It will have a nice gradient glow effect around it!

## Tips for Best Results:

✅ **Good Photo Characteristics:**
- Clear, professional headshot
- Good lighting
- Neutral or professional background
- Smiling and approachable
- Face clearly visible

❌ **Avoid:**
- Blurry or low-quality images
- Group photos
- Heavily filtered images
- Very large file sizes (over 1MB)

## Example File Structure:

```
peter-portfolio/
├── public/
│   ├── profile.jpg  ← Your photo goes here!
│   ├── cv.pdf
│   └── ... other files
```

## Troubleshooting:

**Photo not showing?**
1. Check the filename matches exactly: `profile.jpg`
2. Make sure it's in the `public` folder, not a subfolder
3. Try refreshing your browser (Ctrl+R or Cmd+R)
4. Check the browser console for errors (F12)

**Photo looks stretched or cropped?**
- The image is displayed in a circle, so square photos work best
- Use a photo editor to crop your photo to a square before uploading

**Still having issues?**
- Check that the file extension in `lib/site.ts` matches your actual file (.jpg, .png, etc.)
- Make sure the photo file isn't corrupted (try opening it in an image viewer)

---

Your contact information has been updated:
- ✅ WhatsApp: +254 790 034 942
- ✅ Email 1: pinchezkeing@gmail.com
- ✅ Email 2: peterkilungya1@gmail.com

Just add your photo and you're all set! 🎉
