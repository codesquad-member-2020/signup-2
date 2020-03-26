//
//  ViewController.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/23.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpViewController: UIViewController {
    
    @IBOutlet weak var IDTextField: IDTextField!
    @IBOutlet weak var PWTextField: PWTextField!
    @IBOutlet weak var PWCheckTextField: PWCheckTextField!
    @IBOutlet weak var nameTextField: NameTextField!
    
    @IBOutlet weak var nextButton: SignUpNextButton!
    
    let userIDTextFieldDelegate = IDTextFieldDelegate()
    
    let signUpViewModel = SignUpViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupTextFieldDelegate()
    }
    
    private func setupTextFieldDelegate() {
        IDTextField.delegate = userIDTextFieldDelegate
    }
}
