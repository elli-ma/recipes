# GitHub Actions Deployment Setup

This directory contains the GitHub Actions workflow for automatically building and deploying your Next.js application to an FTP server.

## Workflow File

- **`deploy.yml`**: Builds the Next.js project and deploys it to your FTP server

## How It Works

The workflow is triggered in two ways:
1. **Automatically**: When you push code to the `main` branch
2. **Manually**: Through the GitHub Actions tab in your repository

### Workflow Steps

1. **Checkout code**: Pulls your repository code
2. **Setup Node.js**: Installs Node.js 20 (required for Next.js 15)
3. **Install dependencies**: Runs `npm ci` to install all packages
4. **Build project**: Runs `npm run build` to create the static export in the `out/` directory
5. **Deploy to FTP**: Uploads the contents of `out/` to your FTP server

## Required GitHub Secrets

Before the workflow can run successfully, you need to add the following secrets to your GitHub repository:

### How to Add Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each of the following secrets:

### Required Secrets

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `FTP_SERVER` | Your FTP server address (without protocol) | `ftp.example.com` or `123.45.67.89` |
| `FTP_USERNAME` | Your FTP username | `your_username` |
| `FTP_PASSWORD` | Your FTP password | `your_secure_password` |

### Optional Configuration

You can modify the `deploy.yml` file to customize:

- **`server-dir`**: Change `./` to your desired upload directory on the FTP server (e.g., `./public_html/` or `./www/`)
- **`dangerous-clean-slate`**: Set to `true` if you want to delete all existing files on the server before uploading (use with caution!)
- **`branches`**: Change `main` to another branch name if you use a different default branch

## Testing the Deployment

### First Time Setup

1. Add all required secrets to your GitHub repository
2. Push this workflow file to your `main` branch:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment workflow"
   git push origin main
   ```

### Manual Trigger

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. Select **Build and Deploy to FTP** workflow
4. Click **Run workflow** button
5. Select the branch and click **Run workflow**

### Monitor Deployment

- Go to the **Actions** tab in your GitHub repository
- Click on the latest workflow run to see detailed logs
- Each step will show its progress and any errors

## Troubleshooting

### Build Fails

- Check that all dependencies are correctly listed in `package.json`
- Ensure your code builds successfully locally with `npm run build`

### FTP Connection Fails

- Verify your FTP credentials are correct
- Check that your FTP server allows connections from GitHub's IP addresses
- Some servers may require FTPS or SFTP (you may need a different action)

### Files Not Uploading

- Check the `local-dir` path (should be `./out/` for Next.js static export)
- Verify the `server-dir` path matches your FTP server structure
- Check FTP user permissions on the server

## Security Notes

- **Never commit FTP credentials directly in the workflow file**
- Always use GitHub Secrets for sensitive information
- Consider using SSH keys instead of passwords if your server supports SFTP
- Regularly rotate your FTP passwords

## Alternative: SFTP Deployment

If your server uses SFTP instead of FTP, you can replace the FTP Deploy Action with an SFTP action like `wlixcc/SFTP-Deploy-Action@v1.2.4`.

## Support

For issues with:
- **GitHub Actions**: Check the [GitHub Actions documentation](https://docs.github.com/en/actions)
- **FTP Deploy Action**: Check the [action's repository](https://github.com/SamKirkland/FTP-Deploy-Action)
- **Next.js Build**: Check the [Next.js documentation](https://nextjs.org/docs)
