//
//  EmailTextFieldDelegate.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class EmailTextFieldDelegate: NSObject, UITextFieldDelegate {
    
    var personalInfoViewModel: PersonalInfoViewModel?
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        let text = textField.text ?? ""
        personalInfoViewModel?.email = text
    }
}
