const messageTemplate = ({filling, title, buttonText, warning, buttonUrl}) => {
    return `<table
  style="border-collapse: collapse; width: 100%; margin: 0; padding: 0"
>
  <tr>
    <td style="background: #173414; padding: 40px 0 44px">
      <div style="margin: 0 auto; padding: 0 20px; width: 480px">
        <div style="padding: 0 0 24px;">
          <img
            src="cid:logo"
            alt="Company Logo"
            style="vertical-align: top; display: block;"
            width="121px"
            height="47px"
          />
        </div>
        <div
          style="
            color: #908880;
            font: 300 13px 'Roboto', sans-serif;
            line-height: 170%;
            background: #ffffff;
            padding: 24px;
            border-radius: 8px;
          "
        >
          <div
            style="
              color: #173414;
              font: 700 20px 'Roboto', sans-serif;
              padding: 0 0 12px;
              text-align: center;
            "
          >
            ${title} 🌿
          </div>
          <div style="text-align: center; font-size: 16px; color: #333;">
            ${filling}
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <a
              href="${buttonUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="
                background-color: #173414;
                border-radius: 8px;
                color: #ffffff;
                cursor: pointer;
                display: inline-block;
                font: 500 16px 'Roboto', sans-serif;
                margin: 16px 0 0;
                min-width: 180px;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              "
            >
              ${buttonText}
            </a>
          </div>
          <div style="margin-top: 24px; text-align: center; font-size: 14px; color: #666;">
            ${warning}
          </div>
        </div>
      </div>
    </td>
  </tr>
</table>`
}

export default messageTemplate